import React, {useState} from 'react'
import '../sass/Properties.scss'

const Properties = () => {
    const [activeDiv, setActiveDiv] = useState(0);
    const [activeButton, setActiveButton] = useState(0);

    function toggleDiv(index) {
        setActiveDiv(index);
        setActiveButton(index);
    }

    const [items, setItems] = useState([
        { id: '0', name: 'Alimosho'},
        { id: '1', name: 'Ajeromi-Ifelodun' },
        { id: '2', name: 'Kosofe' },
        { id: '3', name: 'Mushin' },
        { id: '4', name: 'Oshodi-Isolo' },
        { id: '5', name: 'Ojo' },
        { id: '6', name: 'Ikorodu' },
        { id: '7', name: 'Epe' },
        { id: '8', name: 'Surulere' },
        { id: '9', name: 'Agege' },
        { id: '10', name: 'Ifako-Ijaiye' },
        { id: '11', name: 'Somolu' },
        { id: '12', name: 'Amuwo-Odofin' },
        { id: '13', name: 'Lagos Mainland' },
        { id: '14', name: 'Ikeja' },
        { id: '15', name: 'Eti-Osa' },
        { id: '16',  name: 'Badagry' },
        { id: '17', name: 'Apapa' },
        { id: '18', name: 'Lagos Island' },
        { id: '19', name: 'Ibeju-Lekki' },
    ]);

    const [showItems, setShowItems] = useState(false);
    const [activeItem, setActiveItem] = useState(items[0]);

    function handleClick(item) {
        setActiveItem(item);
        setShowItems(false)
    }

    const [house, setHouse] = useState([
        { id:'0', name:'Duplex' },
        { id:'1', name:'Detached House' },
        { id:'2', name:'Semidetached House' },
        { id:'3', name:'Bungalow' },
        { id:'4', name:'Appartment' },
        { id:'5', name:'Manor' },
        { id:'6', name:'Mansion' },
        { id:'7', name:'Estate' },
        { id:'8', name:'Condo' },
    ]);

    const [showHouse, setShowHouse] = useState(false);
    const [activeItem2, setActiveItem2] = useState(house[0]);

    function handleClick2(item) {
        setActiveItem2(item);
        setShowHouse(false);
    }

    const [price, setPrice] = useState([
        { id:'0', name:'$10,000' },
        { id:'1', name:'$40,000' },
        { id:'2', name:'$60,000' },
        { id:'3', name:'$120,000' },
        { id:'4', name:'$180,000' },
        { id:'5', name:'$210,000' },
        { id:'6', name:'$250,000' },
        { id:'7', name:'$350,000' },
    ]);

    const [showPrice, setShowPrice] = useState(false);
    const [activeItem3, setActiveItem3] = useState(price[0]);

    function handleClick3(item) {
        setActiveItem3(item);
        setShowPrice(false);
    }

  return (
    <div>
        <div className="container">
            <div className="btn">
                <button onClick={() => toggleDiv(0)}className={activeButton === 0 ? 'active' : ''}>For Rent</button>
                <button onClick={() => toggleDiv(1)}className={activeButton === 1 ? 'active' : ''}>For Sale</button>
                <button onClick={() => toggleDiv(2)}className={activeButton === 2 ? 'active' : ''}>Short Let</button>
            </div>

            <div className="content">

                <div style={{ display: activeDiv === 0 ? 'block' : 'none' }}>
                    <div className='place'>
                        <div className="card">
                            <button onClick={() => setShowItems(!showItems)}>Location <i class="fa-solid fa-chevron-down"></i></button>
                                {showItems && (
                                    <ItemList 
                                    items={items.filter(i => i !== activeItem)} 
                                    handleClick={handleClick} 
                                    activeItem={activeItem} 
                                    />
                                    )}
                                {activeItem && (
                                    <div style={{}}> {activeItem.name} </div>
                                    )}
                        </div>
                        <div className='card'>
                            <button onClick={() => setShowHouse(!showHouse)}>Property Type <i class="fa-solid fa-chevron-down"></i></button>
                                {showHouse && (
                                    <ItemList 
                                    items={house.filter(i => i !== activeItem2)}
                                    handleClick={handleClick2} 
                                    activeItem={activeItem2} 
                                    />
                                    )}
                                {activeItem2 && (
                                    <div>
                                    {activeItem2.name}
                                </div>
                                )}
                        </div>
                        <div className='card'>
                            <button onClick={() => setShowPrice(!showPrice)}>Price Range <i class="fa-solid fa-chevron-down"></i></button>
                                {showPrice && (
                                    <ItemList 
                                    items={price.filter(i => i !== activeItem3)}
                                    handleClick={handleClick3} 
                                    activeItem={activeItem3} 
                                    />
                                    )}
                                {activeItem3 && (
                                    <div>
                                        {activeItem3.name}
                                    </div>
                                )}
                        </div>

                        <label htmlFor="">
                            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i>Search</button>
                        </label>
                    </div>
                </div>

                <div style={{ display: activeDiv === 1 ? 'block' : 'none' }}>
                    This is div 2
                </div>
                <div style={{ display: activeDiv === 2 ? 'block' : 'none' }}>
                    This is div 3
                </div>

            </div>
        </div>
    </div>
  )
}

function ItemList(props){
    const { items, handleClick, activeItem } = props;

  return (
    <div style={{ position: 'absolute', bottom: 0 }} className='list'>
      {items.map(item => (
        <div 
          key={item.id} 
          onClick={() => handleClick(item)}
          className={item === activeItem ? 'active' : ''}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
    
}

export default Properties