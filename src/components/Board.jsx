import React, { useEffect, useState } from 'react'
import cardsData from "../cardsData.json"
import Card from './Card';
import Score from './Score';

const Board = () => {

    const [mixCards, setMixCards] = useState([]);

    const [flippedCards, setFlippedCards] = useState([])

    const [score, setScore] = useState(0)

    const [prevCard, setPrevCard] = useState(null)


    useEffect(() => {

        //Mezclar las cartas al cargar el componente
        setMixCards(cardsData.map(card => ({ ...card, isFlipped: false })).sort(() => Math.random() - 0.5));
      
    }, []);

    const validateCards=(currentCard)=>{


        //si la carta ya es volteada => no hacemos nada
        if(flippedCards.includes(currentCard.id)){
            return
        }

        // volteamos la carta actual
        setFlippedCards(state=>[...state, currentCard.id]);

        if(!prevCard){
            //si no ahi carta anterior, guardamos la actual como previa
            setPrevCard(currentCard)
        }else{
            // si existe la carta pervia, verificamos si coincide con la actual
            if(prevCard.match===currentCard.match){
                //Hubo Match
                setPrevCard(null)
                setScore(score+1)

            }else{
                //no hubo match, revertimos las cartas
                setTimeout(()=>{
                    setFlippedCards(prev=>prev.filter(id=>id!=prevCard.id && id!=currentCard.id));
                    setPrevCard(null)
                },1000)
                setScore(score+1)

            }

        }





    }
    

  return (

    <div className='flex flex-col items-center bg-stone-300 p-6 bg-opacity-75 rounded-2xl'>
        <Score
        score={score}
        />
        <div className="grid grid-cols-4 grid-rows-4 gap-4 place-items-center h-[70vh] w-[70vw]"> 
        
        
        {
            mixCards.map(card=>{
                console.log(card)
                return <Card
                key={card.id}
                card={card}
                validateCards={validateCards}
                isFlipped={flippedCards.includes(card.id)}
            
                />
        })
        }

        </div>
        

    </div>
    

  )
}

export default Board