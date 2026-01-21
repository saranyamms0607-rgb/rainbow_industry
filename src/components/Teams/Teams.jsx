import React from 'react';
import './Teams.css';

const teamMembers = [
    { id: 1, name: 'John Doe', role: 'CEO & Founder', image: 'https://via.placeholder.com/150/2204FF/FFFFFF?text=CEO' },
    { id: 2, name: 'Jane Smith', role: 'Head of Design', image: 'https://via.placeholder.com/150/2204FF/FFFFFF?text=Design' },
    { id: 3, name: 'Mike Ross', role: 'Production Lead', image: 'https://via.placeholder.com/150/2204FF/FFFFFF?text=Prod' },
];

const Teams = () => {
    return (
        <section className="teams-section">
            <div className="teams-container">
                <h2 className="section-heading">Our Expert Team</h2>
                <p className="section-subheading">The minds behind the innovation</p>

                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <div className="team-card" key={member.id}>
                            <div className="team-img-wrapper">
                                {/* We use placeholders, but would replace with real images or generated ones if asked */}
                                <div className="team-placeholder">{member.name.charAt(0)}</div>
                            </div>
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teams;
