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
                    <div>
                        <button onClick={() => setShowItems(!showItems)}>Location <i class="fa-solid fa-chevron-down"></i></button>
                        {showItems && (
                            <ItemList 
                            items={items} 
                            handleClick={handleClick} 
                            activeItem={activeItem} 
                            />
                        )}
                        {activeItem && (
                            <ul>
                                <li> {activeItem.name} </li>
                            </ul>
                        )}
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
    <div>
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