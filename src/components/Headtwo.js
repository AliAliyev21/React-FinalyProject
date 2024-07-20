import React, { useState } from 'react';
import './Headtwo.css';

export default function Headtwo() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const navigateTo = (url) => {
    window.open(url, '_blank'); 
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleOptionClick = (url) => {
    setSelectedOption(url);
    navigateTo(url);
  };

  return (
    <div className='container2'>
      <div className='section'>
        <label className='turboaz'>TURBO.AZ</label>
        <div className='buttonContainer'>
          <button className='allads' onClick={() => navigateTo('http://localhost:3000/')}>Bütün elanlar</button>
          <button className='salons' onClick={() => navigateTo('https://turbo.az/avtosalonlar')}>Salonlar</button>
          <button className='moto' onClick={() => navigateTo('https://turbo.az/avtosalonlar/c-moto-azerbaijan')}>Moto</button>
          <div
            className='spareParts'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Ehtiyat hissələr və aksesuarlar
            {showDropdown && (
              <div className='dropdown'>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/neqliyyat/ehtiyyat-hisseleri-ve-aksesuarlar?p%5B798%5D=4045&utm_source=turboaz&utm_medium=link&utm_content=accessories&utm_campaign=desktop#_gl=1*blu6n0*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>Aksesuarlar</button>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/neqliyyat/ehtiyyat-hisseleri-ve-aksesuarlar?p%5B798%5D=4046&utm_source=turboaz&utm_medium=link&utm_content=accessories&utm_campaign=desktop#_gl=1*lmg8g6*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>Audio və video texnika </button>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/neqliyyat/ehtiyyat-hisseleri-ve-aksesuarlar?p%5B798%5D=4044&utm_source=turboaz&utm_medium=link&utm_content=accessories&utm_campaign=desktop#_gl=1*gxp1hv*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>Avtokosmetika və avtokimya</button>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/neqliyyat/ehtiyyat-hisseleri-ve-aksesuarlar?p%5B798%5D=4047&utm_source=turboaz&utm_medium=link&utm_content=accessories&utm_campaign=desktop#_gl=1*15r6hl*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>Ehtiyat hissələr</button>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/neqliyyat/ehtiyyat-hisseleri-ve-aksesuarlar?p%5B798%5D=4043&utm_source=turboaz&utm_medium=link&utm_content=accessories&utm_campaign=desktop#_gl=1*15r6hl*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>GPS naviqatorlar</button>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/neqliyyat/qeydiyyat-nisanlari?p%5B798%5D=4119&utm_source=turboaz&utm_medium=link&utm_content=accessories&utm_campaign=desktop#_gl=1*qnphkz*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>Qeydiyyat nişanları</button>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/neqliyyat/ehtiyyat-hisseleri-ve-aksesuarlar?p%5B798%5D=4048&utm_source=turboaz&utm_medium=link&utm_content=accessories&utm_campaign=desktop#_gl=1*qnphkz*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA..')}>Siqnalizasiyalar</button>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/neqliyyat/ehtiyyat-hisseleri-ve-aksesuarlar?p%5B798%5D=7476&utm_source=turboaz&utm_medium=link&utm_content=accessories&utm_campaign=desktop#_gl=1*qnphkz*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>Videoqeydiyyatçılar</button>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/neqliyyat/ehtiyyat-hisseleri-ve-aksesuarlar?p%5B798%5D=4050&utm_source=turboaz&utm_medium=link&utm_content=accessories&utm_campaign=desktop#_gl=1*11o2bd0*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>Şinlər, disklər və təkərlər</button>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/neqliyyat/ehtiyyat-hisseleri-ve-aksesuarlar?p%5B798%5D=4051&utm_source=turboaz&utm_medium=link&utm_content=accessories&utm_campaign=desktop#_gl=1*11o2bd0*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>Digər</button>
              </div>
            )}
          </div>
          <div
            className='spareParts'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            İcarə
            {showDropdown && (
              <div className='dropdown'>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/xidmetler/neqliyyat-icaresi?p%5B1008%5D=40752&utm_source=turboaz&utm_medium=desktop&utm_campaign=rentacar&utm_id=header_cars#_gl=1*165cpaq*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>Avtomobillər</button>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/xidmetler/neqliyyat-icaresi?p%5B1008%5D=40753&utm_source=turboaz&utm_medium=desktop&utm_campaign=rentacar&utm_id=header_buses#_gl=1*165cpaq*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>Avtobus və mikroavtobuslar</button>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/xidmetler/neqliyyat-icaresi?p%5B1008%5D=40755&utm_source=turboaz&utm_medium=desktop&utm_campaign=rentacar&utm_id=header_bikes#_gl=1*gju7b0*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>Motosiklet və mopedlər</button>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/xidmetler/neqliyyat-icaresi?p%5B1008%5D=40754&utm_source=turboaz&utm_medium=desktop&utm_campaign=rentacar&utm_id=header_commerce_transport#_gl=1*gju7b0*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>Xüsusi texnika</button>
                <button onClick={() => handleOptionClick('https://tap.az/elanlar/xidmetler/neqliyyat-icaresi?p%5B1008%5D=40756&utm_source=turboaz&utm_medium=desktop&utm_campaign=rentacar&utm_id=header_other#_gl=1*gju7b0*_ga*MTgxNDQzNzMxMy4xNzIwNjc1NjI5*_ga_68B6PJZXYD*MTcyMTA3MzI5OC42LjEuMTcyMTA3MzMwNS41My4wLjA.')}>Digər</button>
              </div>
            )}
          </div>
        </div>
          <button className='newAnnouncement' onClick={() => navigateTo('')}>
            <img src="https://img.icons8.com/?size=100&id=1501&format=png&color=ffffff" alt="newAnnouncement" className='announcementIcon'></img>
            Yeni Elan
          </button>
      </div>
    </div>
  );
}
