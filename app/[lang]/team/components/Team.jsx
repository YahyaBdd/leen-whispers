export default function Team({lang}) {
    // Team members data in JSON format
    const teamMembersEn = [
        {
            category: 'Managment',
            members: [
                {
                    title: 'Founder & Director',
                    name: 'Veronica Aaron',
                    imageUrl: 'https://placehold.co/700x900',
                    profileLink: 'artist-details.html',
                },
                {
                    title: 'Salon Manager',
                    name: 'Olivia Grosh',
                    imageUrl: 'https://placehold.co/700x900',
                    profileLink: 'artist-details.html',
                },
            ],
        },
        {
            category: 'Hair Stylists',
            members: [
                {
                    title: 'Hair Stylist',
                    name: 'Nichole Smith',
                    imageUrl: 'https://placehold.co/700x900',
                    profileLink: 'artist-details.html',
                },
                {
                    title: 'Hair Stylist',
                    name: 'Sara Mills',
                    imageUrl: 'https://placehold.co/700x900',
                    profileLink: 'artist-details.html',
                },
                {
                    title: 'Hair Stylist',
                    name: 'Rachel Hanley',
                    imageUrl: 'https://placehold.co/700x900',
                    profileLink: 'artist-details.html',
                },
            ],
        },
    ];

    const teamMembersAr = [
        {
            category: 'الإدارة',
            members: [
                {
                    title: 'المؤسسة والمديرة',
                    name: 'فاطمة علي',
                    imageUrl: 'https://placehold.co/700x900',
                    profileLink: 'artist-details.html',
                },
                {
                    title: 'مديرة صالون',
                    name: 'ليلى حسن',
                    imageUrl: 'https://placehold.co/700x900',
                    profileLink: 'artist-details.html',
                },
            ],
        },
        {
            category: 'أخصائيات تصفيف الشعر',
            members: [
                {
                    title: 'أخصائية تصفيف الشعر',
                    name: 'فاطمة عبد الله',
                    imageUrl: 'https://placehold.co/700x900',
                    profileLink: 'artist-details.html',
                },
                {
                    title: 'أخصائية تصفيف الشعر',
                    name: 'لمى حسين',
                    imageUrl: 'https://placehold.co/700x900',
                    profileLink: 'artist-details.html',
                },
                {
                    title: 'أخصائية تصفيف الشعر',
                    name: 'ريما محمد',
                    imageUrl: 'https://placehold.co/700x900',
                    profileLink: 'artist-details.html',
                },
            ],
        },
    ];

    const teamMembers = lang === 'en' ? teamMembersEn : teamMembersAr
    return (
        <section id="team-3" className="pt-8 pb-5 team-section division">
            <div className="container text-center">
                {teamMembers.map((category, index) => (
                    <div key={index} className="team-members-category">
                        <div className="row">
                            <div className="col">
                                <div className="category-title mb-6">
                                    <h2 className="h2-lg">{category.category}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                            {category.members.map((member, memberIndex) => (
                                <div key={memberIndex} className="col">
                                    <div className="team-member wow fadeInUp">
                                        <div className="team-member-photo">
                                            <div className="hover-overlay">
                                                <img
                                                    className="img-fluid"
                                                    src={member.imageUrl}
                                                    alt={`team-member-foto-${memberIndex}`}
                                                />
                                                <div className="item-overlay" />
                                            </div>
                                        </div>
                                        <div className="team-member-data">
                                            <span className="section-id">{member.title}</span>
                                            <h5 className="h5-lg">{member.name}</h5>
                                            <p className="tra-link">
                                                <a href={member.profileLink}>View Profile</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <hr />
            </div>
        </section>
    );
};
