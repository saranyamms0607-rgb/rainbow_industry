import React from 'react';
import './Teams.css';

const teamMembers = [
    {
        id: 1,
        name: 'John Doe',
        role: 'CEO & Founder',
        bio: 'Visionary leader with 20+ years of industrial expertise.'
    },
    {
        id: 2,
        name: 'Jane Smith',
        role: 'Head of Design',
        bio: 'Creative director specializing in ergonomic product design.'
    },
    {
        id: 3,
        name: 'Mike Ross',
        role: 'Production Lead',
        bio: 'Efficiency expert ensuring top-tier manufacturing standards.'
    },
];

const Teams = () => {
    return (
        <section className="teams-section">
            <div className="teams-bg-pattern"></div>
            <div className="teams-container">
                <div className="teams-header reveal-on-scroll">
                    <h2 className="section-heading">Our Expert Team</h2>
                    <p className="section-subheading">Developing innovation through collective wisdom</p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div className={`team-card reveal-on-scroll stagger-${(index % 3) + 1}`} key={member.id}>
                            <div className="team-card-inner">
                                <div className="team-img-wrapper">
                                    <div className="team-avatar-gradient">
                                        <div className="team-placeholder">{member.name.charAt(0)}</div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h3 className="team-name">{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                    <p className="team-bio">{member.bio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teams;
