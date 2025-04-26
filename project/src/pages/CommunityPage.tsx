import React, { useState } from 'react';
import { Heart, Award, Calendar, MapPin, MessageSquare, ThumbsUp, Share2, User, Search } from 'lucide-react';

interface CommunityPost {
  id: number;
  author: {
    name: string;
    avatar: string;
    role: string;
    donationCount?: number;
  };
  date: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees: number;
  image?: string;
}

interface DonorStory {
  id: number;
  name: string;
  avatar: string;
  donationCount: number;
  story: string;
  image?: string;
}

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'events' | 'stories'>('feed');
  const [searchQuery, setSearchQuery] = useState('');
  
  const communityPosts: CommunityPost[] = [
    {
      id: 1,
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
        role: 'Regular Donor',
        donationCount: 12,
      },
      date: '2025-04-10T14:30:00',
      content: "Just completed my 12th blood donation today! The staff at Central Blood Bank were amazing as always. Remember, each donation can save up to 3 lives. Who's donating next?",
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      likes: 48,
      comments: 15,
      shares: 7,
      tags: ['BloodDonation', 'LifeSaver', 'DonateBlood'],
    },
    {
      id: 2,
      author: {
        name: 'Memorial Hospital',
        avatar: 'https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
        role: 'Hospital Partner',
      },
      date: '2025-04-09T10:15:00',
      content: "URGENT: We're experiencing a critical shortage of O- blood type. If you're an O- donor, please consider donating as soon as possible. Your donation could save lives in emergency situations.",
      likes: 112,
      comments: 32,
      shares: 86,
      tags: ['UrgentNeed', 'ONegative', 'BloodShortage', 'EmergencyAppeal'],
    },
    {
      id: 3,
      author: {
        name: 'Dr. Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
        role: 'Medical Professional',
      },
      date: '2025-04-08T16:45:00',
      content: "Blood fact of the day: Did you know that red blood cells live for about 120 days in the bloodstream? Your body continuously replaces them, which is why it's safe to donate blood every 56 days. #BloodFacts",
      likes: 76,
      comments: 8,
      shares: 23,
      tags: ['BloodFacts', 'MedicalInfo', 'HealthEducation'],
    },
  ];
  
  const events: Event[] = [
    {
      id: 1,
      title: 'Community Blood Drive',
      date: '2025-04-20',
      time: '9:00 AM - 4:00 PM',
      location: 'Central Community Center, Downtown',
      description: 'Join our biggest blood drive of the year! We aim to collect 200 units of blood in a single day. Refreshments provided for all donors.',
      attendees: 87,
      image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      title: 'University Campus Blood Drive',
      date: '2025-04-25',
      time: '10:00 AM - 3:00 PM',
      location: 'University Student Center, Campus Blvd',
      description: 'Calling all students and faculty! Donate blood between classes and help save lives. Student donors will receive volunteer hour credits.',
      attendees: 42,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      title: 'Corporate Blood Donation Day',
      date: '2025-05-05',
      time: '8:00 AM - 5:00 PM',
      location: 'Business District, Multiple Office Buildings',
      description: 'Our mobile blood donation units will visit major corporate offices. Pre-register to donate during your lunch break!',
      attendees: 63,
    },
  ];
  
  const donorStories: DonorStory[] = [
    {
      id: 1,
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      donationCount: 25,
      story: "I started donating blood after my sister needed multiple transfusions following a car accident. She received 4 units of blood that saved her life. Since then, I've been a regular donor for over 5 years. It's such a simple way to make a huge difference.",
      image: 'https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      donationCount: 8,
      story: "After my accident, I needed multiple transfusions. Thanks to LifeFlow's efficient donor matching, the hospital had exactly what I needed. I'm forever grateful to the donors who saved my life. Now I donate regularly to pay it forward.",
    },
    {
      id: 3,
      name: 'David Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      donationCount: 42,
      story: "I've been donating blood for over 15 years now. What keeps me coming back is knowing that my rare blood type (AB-) can help patients in critical situations. The LifeFlow app makes it so easy to schedule donations and track my impact.",
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ];
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const filteredPosts = communityPosts.filter(post => 
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredStories = donorStories.filter(story => 
    story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.story.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-blood-red text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blood Donor Community</h1>
          <p className="text-lg opacity-90 mb-6">
            Connect with fellow donors, share your experiences, and stay updated on blood donation events.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search posts, events, or stories..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50 text-gray-900"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'feed'
                ? 'text-blood-red border-b-2 border-blood-red'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('feed')}
          >
            Community Feed
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'events'
                ? 'text-blood-red border-b-2 border-blood-red'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('events')}
          >
            Upcoming Events
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm ${
              activeTab === 'stories'
                ? 'text-blood-red border-b-2 border-blood-red'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('stories')}
          >
            Donor Stories
          </button>
        </div>
        
        {activeTab === 'feed' && (
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Share your donation experience or ask a question..."
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="px-4 py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200">
                  Post
                </button>
              </div>
            </div>
            
            {filteredPosts.length > 0 ? (
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <div className="flex items-center">
                            <h3 className="font-semibold text-text-dark">{post.author.name}</h3>
                            {post.author.donationCount && (
                              <div className="ml-2 px-2 py-0.5 bg-red-100 text-blood-red rounded-full text-xs flex items-center">
                                <Heart className="w-3 h-3 mr-1" />
                                {post.author.donationCount} donations
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{post.author.role} • {new Date(post.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{post.content}</p>
                      
                      {post.image && (
                        <div className="mb-4 rounded-lg overflow-hidden">
                          <img 
                            src={post.image} 
                            alt="Post" 
                            className="w-full h-auto"
                          />
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between border-t border-gray-100 pt-4">
                        <button className="flex items-center text-gray-600 hover:text-blood-red">
                          <ThumbsUp className="w-5 h-5 mr-1" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-blood-red">
                          <MessageSquare className="w-5 h-5 mr-1" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-blood-red">
                          <Share2 className="w-5 h-5 mr-1" />
                          <span>{post.shares}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600 mb-4">No posts match your search criteria.</p>
                <button 
                  className="px-4 py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200"
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'events' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-text-dark">Upcoming Blood Donation Events</h2>
              <button className="px-4 py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200">
                Create Event
              </button>
            </div>
            
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                    {event.image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-text-dark mb-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{event.date}, {event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{event.location}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{event.attendees} attending</span>
                        <button className="px-3 py-1.5 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200 text-sm">
                          RSVP
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600 mb-4">No events match your search criteria.</p>
                <button 
                  className="px-4 py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200"
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'stories' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-text-dark">Donor Stories & Experiences</h2>
              <button className="px-4 py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200">
                Share Your Story
              </button>
            </div>
            
            {filteredStories.length > 0 ? (
              <div className="space-y-8">
                {filteredStories.map((story) => (
                  <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <img 
                          src={story.avatar} 
                          alt={story.name} 
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-text-dark">{story.name}</h3>
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 text-blood-red mr-1" />
                            <span className="text-sm text-gray-600">{story.donationCount} donations</span>
                            {story.donationCount >= 25 && (
                              <div className="ml-2 flex items-center">
                                <Award className="w-4 h-4 text-yellow-500 mr-1" />
                                <span className="text-xs text-yellow-600">Gold Donor</span>
                              </div>
                            )}
                            {story.donationCount >= 10 && story.donationCount < 25 && (
                              <div className="ml-2 flex items-center">
                                <Award className="w-4 h-4 text-gray-400 mr-1" />
                                <span className="text-xs text-gray-600">Silver Donor</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="prose max-w-none mb-4">
                        <p className="text-gray-700">{story.story}</p>
                      </div>
                      
                      {story.image && (
                        <div className="mb-4 rounded-lg overflow-hidden">
                          <img 
                            src={story.image} 
                            alt="Story" 
                            className="w-full h-auto"
                          />
                        </div>
                      )}
                      
                      <div className="flex justify-between border-t border-gray-100 pt-4">
                        <button className="flex items-center text-gray-600 hover:text-blood-red">
                          <ThumbsUp className="w-5 h-5 mr-1" />
                          <span>Like</span>
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-blood-red">
                          <MessageSquare className="w-5 h-5 mr-1" />
                          <span>Comment</span>
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-blood-red">
                          <Share2 className="w-5 h-5 mr-1" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600 mb-4">No stories match your search criteria.</p>
                <button 
                  className="px-4 py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200"
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-text-dark mb-2">Donor Recognition Program</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We celebrate our donors' commitment to saving lives through our recognition program.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blood-red" />
              </div>
              <h3 className="text-lg font-semibold text-text-dark mb-2">Bronze Donor</h3>
              <p className="text-gray-600 mb-4">
                Awarded to donors who have made 5-9 donations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Digital badge for your profile</li>
                <li>Recognition in our newsletter</li>
                <li>Priority scheduling for donations</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-lg font-semibold text-text-dark mb-2">Silver Donor</h3>
              <p className="text-gray-600 mb-4">
                Awarded to donors who have made 10-24 donations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>All Bronze benefits</li>
                <li>Silver donor pin</li>
                <li>Exclusive event invitations</li>
                <li>Personalized donor card</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-text-dark mb-2">Gold Donor</h3>
              <p className="text-gray-600 mb-4">
                Awarded to donors who have made 25+ donations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>All Silver benefits</li>
                <li>Gold donor pin and certificate</li>
                <li>Featured donor story</li>
                <li>VIP access to blood donation events</li>
                <li>Annual recognition ceremony invitation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12 bg-blood-red text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            Connect with fellow donors, share your experiences, and help inspire others to donate blood.
          </p>
          <button className="px-6 py-3 bg-white text-blood-red rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium">
            Create Your Donor Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;