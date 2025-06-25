import React from 'react';

function About(){
    return(
        <div
            style={{
            position: 'relative',
            zIndex: 2,
            height: '50%',
            width: '50%',
            backgroundColor: 'lightblue',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10%',
            textAlign: 'center',
            }}
        >
            <p
            className="text-center"
            style={{
                fontFamily: `'Edu NSW ACT Hand Pre', cursive`,
                fontSize: '2.5rem',
                margin: '10%'
            }}
            >About us</p>
            <p>About Taniti
Welcome to Taniti, a hidden gem nestled in the Pacific Ocean. Though our island spans less than 500 square miles, it offers a breathtaking diversity of landscapes—from white, sandy beaches and rocky shores to lush rainforests and a dramatic mountainous interior featuring an active volcano.

Taniti is home to approximately 20,000 indigenous residents who have long relied on fishing and agriculture. In recent years, tourism has flourished, bringing new energy and opportunity to the island while preserving its rich cultural heritage.

A Destination for Every Traveler
Taniti City is the heart of the island and a must-visit for its native architecture, vibrant culture, and beautiful beaches surrounding Yellow Leaf Bay. Just north of the bay, Merriton Landing is quickly becoming a hub of activity and entertainment, offering everything from zip-lining adventures and helicopter tours to a new dance club and microbrewery.

Dining & Shopping
With 10 diverse restaurants, Taniti caters to all tastes—from locally caught seafood and traditional dishes to American favorites and Pan-Asian cuisine. Shoppers will find two supermarkets, smaller groceries, and a 24-hour convenience store for all essentials.

Lodging Options
Whether you're traveling on a budget or seeking luxury, Taniti has something for you. Stay in a cozy bed and breakfast, a charming family-owned hotel, or the island’s four-star resort. All lodging options are closely regulated and regularly inspected to ensure a safe, enjoyable stay.
            </p>
        </div>
    );
}

export default About;