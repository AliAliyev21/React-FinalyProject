import React from 'react';
import './Headr.css';

export default function Headr() {
  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <div className='container1'>
      <div className='left-section'>
        <button className='tapaz' onClick={() => navigateTo('https://www.tap.az')}>Tap.az</button>
        <button className='binaaz' onClick={() => navigateTo('https://www.bina.az')}>Bina.az</button>
        <button className='bossaz' onClick={() => navigateTo('https://www.boss.az')}>Boss.az</button>
      </div>
      <div className='right-section'>
        <label className='destek'>Dəstək:(012) 505-77-55</label>
        <button className='yardim'>Yardım</button>
        <label className='lang'>RU</label>
        <button className='secilmisler'>
          <img src="https://img.icons8.com/?size=100&id=8oi1QROawHZh&format=png&color=000000"  alt="Seçilmişlər" className='secilmislerIcon'/>
          Seçilmişlər
        </button>
        <button className='giris'>
          <img src="https://img.icons8.com/?size=100&id=7820&format=png&color=000000" alt="giris" className='girisIcon'></img>
          Giriş</button>
      </div>
    </div>
  );
}
