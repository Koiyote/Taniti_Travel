import FlipCard from './FlipCard'



function Travel_Destination(){
    

    return (
        <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#f0f8ff', // optional, for visual centering
                }}>
            <div>
            <h2 style={{
                fontFamily: `'Edu NSW ACT Hand Pre', cursive`,
                fontSize: '2.5rem',
                margin: '10%'
            }}>See where you connect with!</h2>
        </div>
        <div
            style={{
            position: 'relative',
            zIndex: 2,
            height: '50%',
            width: '80%',
            backgroundColor: 'lightblue',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '10%',
            textAlign: 'center',
            }}
        >

        
    
        <FlipCard
        frontTitle="Luxurious restaurants by the water"
        frontText="Try all the local delicacies"
        backTitle="Lunch served at 11AM"
        imageUrl="/restaurant_by_the_shore.png"
      />

      <FlipCard
        frontTitle="Enjoy the many beaches"
        frontText="See natural wonder"
        backTitle="Beach tours"
        imageUrl="/shoreline-beach.png"
      />

     <FlipCard
        frontTitle="The highest quality of snorkling "
        frontText="Crystal clear blue water a ripe for adventuring"
        backTitle="Snorkling class 10AM till 6PM"
        imageUrl="/snorkling.png"
      />
        </div>
        </div>
        
    );
}


export default Travel_Destination;