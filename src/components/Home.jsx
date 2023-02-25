import React from 'react'
import person from '../assets/icon-person.svg'
import cog from '../assets/icon-cog.svg'
import chart from '../assets/icon-chart.svg'
import avatarKady from '../assets/avatar-kady.jpg'
import avatarAiysha from '../assets/avatar-aiysha.jpg'
import avatarArthur from '../assets/avatar-arthur.jpg'

const Home = () => {
    return (
        <>
            <section className='find'>
                <div className="wrapper">
                    <div className='find--container'>
                        <div className='find--title'>
                            <h1>Find the best <span className='accent_red'>talent</span></h1>
                        </div>
                        <div className='find--par'>
                            <p>
                                Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='build'>
                <div className="wrapper">
                    <div className='build--container'>
                        <div className='build--title'>
                            <h2 className='title_h2'>
                                Build & manage distributed teams like no one else.
                            </h2>
                        </div>
                        <div className='build--list'>
                            <ol>
                                <li>
                                    <img src={person} alt="individuals" />
                                    <div>
                                        <span>Experienced Individuals</span>
                                        <p>
                                            Our network is made up of highly experienced professionals who are passionate about what they do.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src={cog} alt="individuals" />
                                    <div>
                                        <span>Easy to Implement</span>
                                        <p>
                                            Our processes have been refined over years of implementation meaning our teams always deliver.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <img src={chart} alt="individuals" />
                                    <div>
                                        <span>Enhanced Productivity</span>
                                        <p>
                                            Our customized platform with in-built analytics helps you manage your distributed teams.
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className='stories'>
                <div className="wrapper">
                    <div className='stories--container'>
                        <div className='stories--title'>
                            <h2 className='title_h2'>
                                Delivering real results for top companies. Some of our <span className='accent_blue'>success stories.</span>
                            </h2>
                        </div>
                        <div className='cards'>
                            <div className='card'>
                                <q className='card--quote'>
                                    The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.
                                </q>
                                <h4 className='card--name'>
                                    Kady Baker
                                </h4>
                                <span className='card--position'>
                                    Product Manager at Bookmark
                                </span>
                                <img className='card--avatar' src={avatarKady} alt="avatarKady" /></div>
                            <div className='card'>
                                <q className='card--quote'>
                                    We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!
                                </q>
                                <h4 className='card--name'>
                                    Aiysha Reese
                                </h4>
                                <span className='card--position'>
                                    Founder of Manage
                                </span>
                                <img className='card--avatar' src={avatarAiysha} alt="avatarAiysha" /></div>
                            <div className='card'>
                                <q className='card--quote'>
                                    Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month
                                </q>
                                <h4 className='card--name'>
                                    Arthur Clarke
                                </h4>
                                <span className='card--position'>
                                    Co-founder of MyPhysio
                                </span>
                                <img className='card--avatar' src={avatarArthur} alt="avatarArthur" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
