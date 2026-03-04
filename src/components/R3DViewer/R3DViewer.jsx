import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './R3DViewer.css';

// Works in dev (/) and on GitHub Pages (/rainbow_industry/)
const modelUrl = `${import.meta.env.BASE_URL}base.glb`;

const R3DViewer = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = null; // transparent background

    const rect = mount.getBoundingClientRect();
    const width = rect.width || 600;
    const height = rect.height || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    mount.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 10, 7.5);
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0xaaccff, 0.6);
    backLight.position.set(-5, -3, -5);
    scene.add(backLight);

    // Environment map for glass reflections
    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(128);
    const cubeCamera = new THREE.CubeCamera(0.1, 10, cubeRenderTarget);
    scene.add(cubeCamera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; // disable zoom for cleaner look
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0; // auto-rotate speed

    let model = null;

    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        model = gltf.scene || gltf.scenes?.[0];
        if (!model) {
          // eslint-disable-next-line no-console
          console.error('GLTF loaded but contains no scene.');
          return;
        }

        // Compute bounding box to determine top/bottom halves
        const box = new THREE.Box3().setFromObject(model);
        const midY = (box.min.y + box.max.y) / 2;

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            // Get world position center of mesh
            const meshBox = new THREE.Box3().setFromObject(child);
            const meshCenterY = (meshBox.min.y + meshBox.max.y) / 2;

            if (meshCenterY < midY) {
              // BOTTOM HALF — solid black
              child.material = new THREE.MeshStandardMaterial({
                color: 0x000000,
                roughness: 0.2,
                metalness: 0.8,
              });
            } else {
              // TOP HALF — glass / transparent
              child.material = new THREE.MeshPhysicalMaterial({
                color: 0xffffff,
                transmission: 0.92,       // glass transparency
                opacity: 1,
                transparent: true,
                roughness: 0.05,
                metalness: 0.0,
                ior: 1.5,                 // index of refraction
                thickness: 0.5,
                envMapIntensity: 1.5,
                clearcoat: 1.0,
                clearcoatRoughness: 0.1,
                side: THREE.DoubleSide,
              });
            }
          }
        });

        const size = box.getSize(new THREE.Vector3()).length();
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        const scale = (size > 0) ? (1.5 / size) : 1;
        model.scale.setScalar(scale);

        scene.add(model);
      },
      undefined,
      (err) => {
        // eslint-disable-next-line no-console
        console.error('GLTF load error:', err);
      }
    );

    // Resize observer to handle client-side route transitions and layout changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        const w = Math.max(1, Math.floor(cr.width));
        const h = Math.max(1, Math.floor(cr.height));
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(mount);

    let rafId = null;
    const animate = () => {
      controls.update();
      cubeCamera.update(renderer, scene);
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    // Ensure initial render size is correct and start loop
    const initRect = mount.getBoundingClientRect();
    if (initRect.width && initRect.height) {
      renderer.setSize(initRect.width, initRect.height);
    }
    animate();

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      controls.dispose();
      if (rafId) cancelAnimationFrame(rafId);
      if (model) scene.remove(model);
      renderer.dispose();
      if (mount && renderer.domElement) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="r3d-mount" ref={mountRef} />;
};

export default R3DViewer;
