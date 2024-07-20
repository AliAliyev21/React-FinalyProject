import React, { useState, useEffect } from 'react';
import './Filters.css';
import carsData from '../cars.json';

const getUniqueOptions = (array, key) => [...new Set(array.map(item => item[key]))];

export default function Filters() {
  const [selectedMarka, setSelectedMarka] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedBanNovu, setSelectedBanNovu] = useState('');
  const [selectedSuretlerQutusu, setSelectedSuretlerQutusu] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedYanacaqNovu, setSelectedYanacaqNovu] = useState('');
  const [selectedOturucu, setSelectedOturucu] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minHecmi, setMinHecmi] = useState('');
  const [maxHecmi, setMaxHecmi] = useState('');
  const [minGuc, setMinGuc] = useState('');
  const [maxGuc, setMaxGuc] = useState('');
  const [minYurus, setMinYurus] = useState('');
  const [maxYurus, setMaxYurus] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [selectedTechizat, setSelectedTechizat] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCars, setSelectedCars] = useState([]);
  const [showSelectedCars, setShowSelectedCars] = useState(false);
  const [cars, setCars] = useState(carsData.cars);
  const [showAddCarForm, setShowAddCarForm] = useState(false);
  const [newCar, setNewCar] = useState({
    marka: '',
    model: '',
    qiymet: '',
    banNovu: '',
    ili: '',
    yanacaqNovu: '',
    oturucu: '',
    suretlerQutusu: '',
    hecmi: '',
    guc: '',
    yurus: '',
    image: '',
    date: '',
    techizat: {}
  });

  useEffect(() => {
    filterCars();
    console.log(filteredCars);
  }, [
    selectedMarka,
    selectedModel,
    selectedBanNovu,
    selectedSuretlerQutusu,
    selectedYear,
    selectedYanacaqNovu,
    selectedOturucu,
    minPrice,
    maxPrice,
    minHecmi,
    maxHecmi,
    minGuc,
    maxGuc,
    minYurus,
    maxYurus,
    selectedTechizat
  ]);

  const filterCars = () => {
    const filtered = carsData.cars.filter((car) => {
      return (
        (selectedMarka === '' || car.marka === selectedMarka) &&
        (selectedModel === '' || car.model === selectedModel) &&
        (selectedBanNovu === '' || car.banNovu === selectedBanNovu) &&
        (selectedSuretlerQutusu === '' || car.suretlerQutusu === selectedSuretlerQutusu) &&
        (selectedYear === '' || car.ili.toString() === selectedYear) &&
        (selectedYanacaqNovu === '' || car.yanacaqNovu === selectedYanacaqNovu) &&
        (selectedOturucu === '' || car.oturucu === selectedOturucu) &&
        (minPrice === '' || parseFloat(car.qiymet) >= parseFloat(minPrice)) &&
        (maxPrice === '' || parseFloat(car.qiymet) <= parseFloat(maxPrice)) &&
        (minHecmi === '' || parseFloat(car.hecmi) >= parseFloat(minHecmi)) &&
        (maxHecmi === '' || parseFloat(car.hecmi) <= parseFloat(maxHecmi)) &&
        (minGuc === '' || parseFloat(car.guc) >= parseFloat(minGuc)) &&
        (maxGuc === '' || parseFloat(car.guc) <= parseFloat(maxGuc)) &&
        (minYurus === '' || parseFloat(car.yurus.replace(/,/g, '')) >= parseFloat(minYurus)) &&
        (maxYurus === '' || parseFloat(car.yurus.replace(/,/g, '')) <= parseFloat(maxYurus)) &&
        (selectedTechizat.length === 0 || selectedTechizat.every(item => car.techizat[item]))
      );
    });
    setFilteredCars(filtered.slice(0, 20));
  };

  const getModelsForMarka = () => {
    if (!selectedMarka) return [];

    return [...new Set(carsData.cars
      .filter(car => car.marka === selectedMarka)
      .map(car => car.model))];
  };

  const showAds = () => {
    window.location.href = window.location.href;
  };

  const toggleAdvancedFilters = () => {
    setShowAdvancedFilters(!showAdvancedFilters);
  };

  const toggleTechizat = (item) => {
    setSelectedTechizat(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const getTechizatOptions = () => {
    return [...new Set(carsData.cars.flatMap(car => Object.keys(car.techizat).filter(key => car.techizat[key])))];
  };

  const toggleSelectCar = (carId) => {
    setSelectedCars(prev => 
      prev.includes(carId) ? prev.filter(id => id !== carId) : [...prev, carId]
    );
  };

  const handleSelectedCarsButton = () => {
    setShowSelectedCars(true);
  };

  const handleAddCarFormChange = (e) => {
    const { name, value } = e.target;
    setNewCar(prevCar => ({
      ...prevCar,
      [name]: value
    }));
  };

  const handleAddCarSubmit = (e) => {
    e.preventDefault();
    setCars(prev => [...prev, newCar]);
    setFilteredCars(prev => [...prev, newCar].slice(0, 20));
    setShowAddCarForm(false);
    setNewCar({
      marka: '',
      model: '',
      qiymet: '',
      banNovu: '',
      ili: '',
      yanacaqNovu: '',
      oturucu: '',
      suretlerQutusu: '',
      hecmi: '',
      guc: '',
      yurus: '',
      image: '',
      date: '',
      techizat: {}
    });
  };

  return (
    <div className='container3'>
      <div className='left-column'>
        <img
          src='https://e0.pxfuel.com/wallpapers/187/747/desktop-wallpaper-notitle-simon-vlogt-designs-mercedes-mercedes-benz-mercedes-logo-mercedes-benz.jpg'
          alt='mercedes'
        />
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkB-tsFD8nfT6Pyc02pzZ-E9Ua5aTM-5D5A&s'
          alt='porche'
        />
        <img
          src='https://w0.peakpx.com/wallpaper/366/195/HD-wallpaper-white-bentley-white-bentley-car-luxary-car-thumbnail.jpg'
          alt='bentley'
        />
         <img
          src='https://w0.peakpx.com/wallpaper/795/811/HD-wallpaper-toyota-logo-logos-thumbnail.jpg'
          alt='toyota'
        />
      </div>

      <div className='filter-column'>
        <div className='basic-filters'>
          <div className='select-wrapper'>
            <select className='markaBox' onChange={(e) => setSelectedMarka(e.target.value)} value={selectedMarka}>
              <option value='' disabled hidden>
                Marka
              </option>
              {[...new Set(carsData.cars.map((car) => car.marka))].map((marka, index) => (
                <option key={index} value={marka}>
                  {marka}
                </option>
              ))}
            </select>
          </div>
          <div className='select-wrapper'>
            <select className='modelBox' onChange={(e) => setSelectedModel(e.target.value)} value={selectedModel} disabled={!selectedMarka}>
              <option value='' disabled hidden>
                Model
              </option>
              {getModelsForMarka().map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          <div className='priceLbl1'>
            <input
              type='number'
              placeholder='Max Price'
              onChange={(e) => setMaxPrice(e.target.value)}
              value={maxPrice}
            />
          </div>
          <div className='priceLbl2'>
            <input
              type='number'
              placeholder='Min Price'
              onChange={(e) => setMinPrice(e.target.value)}
              value={minPrice}
            />
          </div>

          <div className='select-wrapper'>
            <select className='yearBox' onChange={(e) => setSelectedYear(e.target.value)} value={selectedYear}>
              <option value='' disabled hidden>
                Year
              </option>
              {[...new Set(carsData.cars.map((car) => car.ili))].map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className='select-wrapper'>
            <select className='banBox' onChange={(e) => setSelectedBanNovu(e.target.value)} value={selectedBanNovu}>
              <option value=''>Ban Növü</option>
              {[...new Set(carsData.cars.map((car) => car.banNovu))].map((banNovu, index) => (
                <option key={index} value={banNovu}>
                  {banNovu}
                </option>
              ))}
            </select>
          </div>

          <div className='select-wrapper'>
            <select className='suretBox' onChange={(e) => setSelectedSuretlerQutusu(e.target.value)} value={selectedSuretlerQutusu}>
              <option value=''>Sürətlər qutusu</option>
              {[...new Set(carsData.cars.map((car) => car.suretlerQutusu))].map((suretlerQutusu, index) => (
                <option key={index} value={suretlerQutusu}>
                  {suretlerQutusu}
                </option>
              ))}
            </select>
          </div>

          <div className='select-wrapper'>
            <select className='fuelBox' onChange={(e) => setSelectedYanacaqNovu(e.target.value)} value={selectedYanacaqNovu}>
              <option value=''>Yanacaq növü</option>
              {[...new Set(carsData.cars.map((car) => car.yanacaqNovu))].map((yanacaqNovu, index) => (
                <option key={index} value={yanacaqNovu}>
                  {yanacaqNovu}
                </option>
              ))}
            </select>
          </div>

          <div className=''>
            <button className='currentApp' onClick={showAds}>Elanları göstər</button>
          </div>
        </div>

        <div className='toggle-advanced'>
          <button onClick={toggleAdvancedFilters}>
            {showAdvancedFilters ? 'Gizlət' : 'Daha çox filtr'}
          </button>
        </div>

        {showAdvancedFilters && (
          <div className='advanced-filters'>
            <div className='price-range'>
              <input
                type='number'
                placeholder='Min Həcmi'
                onChange={(e) => setMinHecmi(e.target.value)}
                value={minHecmi}
              />
              <input
                type='number'
                placeholder='Max Həcmi'
                onChange={(e) => setMaxHecmi(e.target.value)}
                value={maxHecmi}
              />
            </div>

            <div className='power-range'>
              <input
                type='number'
                placeholder='Min Güc'
                onChange={(e) => setMinGuc(e.target.value)}
                value={minGuc}
              />
              <input
                type='number'
                placeholder='Max Güc'
                onChange={(e) => setMaxGuc(e.target.value)}
                value={maxGuc}
              />
            </div>

            <div className='mileage-range'>
              <input
                type='number'
                placeholder='Min Yürüş'
                onChange={(e) => setMinYurus(e.target.value)}
                value={minYurus}
              />
              <input
                type='number'
                placeholder='Max Yürüş'
                onChange={(e) => setMaxYurus(e.target.value)}
                value={maxYurus}
              />
            </div>

            <div className=''>
              <select className='oturucuBox' onChange={(e) => setSelectedOturucu(e.target.value)} value={selectedOturucu}>
                <option value=''>Oturucu</option>
                {[...new Set(carsData.cars.map((car) => car.oturucu))].map((oturucu, index) => (
                  <option key={index} value={oturucu}>
                    {oturucu}
                  </option>
                ))}
              </select>
            </div>

            <div className='techizat'>
              {getTechizatOptions().map((item, index) => (
                <button
                  key={index}
                  className={`techizat-button ${selectedTechizat.includes(item) ? 'selected' : ''}`}
                  onClick={() => toggleTechizat(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        

        <div className='filtered-cars'>
          {showSelectedCars ? (
            filteredCars
              .filter(car => selectedCars.includes(car.id))
              .map((car, index) => (
                <div key={index} className='car-card'>
                  <img src={car.image} alt={car.model} className='car-image' />
                  <div className='car-details'>
                    <p className='car-price'>{car.qiymet} AZN</p>
                    <p className='car-model'>{`${car.marka} ${car.model}`}</p>
                    <p className='car-year'>{`${car.ili} , ${car.hecmi} , ${car.yurus}`}</p>
                    <p className='car-date'>{`${car.date}`}</p>
                  </div>
                  <button 
                    className={`heart-button ${selectedCars.includes(car.id) ? 'selected' : ''}`} 
                    onClick={() => toggleSelectCar(car.id)}
                  >
                    ❤️
                  </button>
                </div>
              ))
          ) : filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <div key={index} className='car-card'>
                <img src={car.image} alt={car.model} className='car-image' />
                <div className='car-details'>
                  <p className='car-price'>{car.qiymet} AZN</p>
                  <p className='car-model'>{`${car.marka} ${car.model}`}</p>
                  <p className='car-year'>{`${car.ili} , ${car.hecmi} , ${car.yurus}`}</p>
                  <p className='car-date'>{`${car.date}`}</p>
                </div>
                <button 
                  className={`heart-button ${selectedCars.includes(car.id) ? 'selected' : ''}`} 
                  onClick={() => toggleSelectCar(car.id)}
                >
                  🤍
                </button>
              </div>
            ))
          ) : (
            <p>No cars found</p>
          )}
        </div>

        


      </div>
      <div className='right-column'>
      <img
          src='https://w0.peakpx.com/wallpaper/874/617/HD-wallpaper-lamborghini-logo-car-thumbnail.jpg'
          alt='lambo'
          />
        <img
          src='https://i.pinimg.com/originals/f5/7a/cd/f57acd525c15fa16d7b23d29637847f6.jpg'
          alt='ferrari'
        />
        <img
          src='https://i.pinimg.com/736x/46/ec/f6/46ecf6f92b521aad0c9dee8fdd586800.jpg'
          alt='rolls'
        />
        <img
          src='https://i.pinimg.com/736x/68/13/39/681339ce4f9beeefb949a26db4fa1b32.jpg'
          alt='bmw'
        />
      </div>
    </div>
  );
}
