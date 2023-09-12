import './Bottle.css'
const Bottle = ({bottle ,handlePurcase}) => {
    
    console.log(bottle);
    const {name,img,price}=bottle;
    return (
        <div className='bottle'>
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={()=>handlePurcase(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;