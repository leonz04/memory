import React from 'react'

const Card = ({card,validateCards,isFlipped}) => {

    const handleClickCard=()=>{

        if(!isFlipped){
            validateCards(card)
        }
    }


  return (
    <div className='w-[150px] h-[150px] bg-transparent cursor-pointer group perspective'
    onClick={handleClickCard}>
        
        <div className={`relative preserve-3d w-full h-full duration-1000 ${isFlipped? 'my-rotate-y-180' : '' }`}>
            {/* cara1 */}
            <div className='absolute w-full h-full'>
                <img src={card.src} alt=''/>


            </div>
            {/* cara2 */}
            <div className='absolute backface-hidden w-full h-full rounded-full overflow-hidden'>
                <img src='https://e7.pngegg.com/pngimages/1022/1019/png-clipart-question-mark-logo-question-mark-in-circle-icons-logos-emojis-question-marks.png'
                alt='imagen'/>
                
            </div>
        </div>
    </div>
  )
}

export default Card