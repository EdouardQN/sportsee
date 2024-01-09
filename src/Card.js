import React from 'react';

const Card = (properties) => {
    const cardStyle = {
        position:"relative",
        left:"50%",
        top:"70%",
        width: '230px',
        height: '100px', 
        backgroundColor: '#FBFBFB',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12)',
        padding: '16px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap:"12px",
    };
    
    const imageStyle = {
        borderRadius: '4px',
    };

    const textContainerStyle = {
        marginTop: '12px',
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"flex-start",
        gap:"4px",
    };

    const valueStyle = {
        fontSize: '16px',
        fontWeight: '700',
    };

    const labelStyle = {
        fontSize: '12px',
        color: '#74798C', 
    };

  return (
    <div style={cardStyle}>
      <img
        src={properties.img} 
        alt={properties.alt}
        style={imageStyle}
      />
      <div style={textContainerStyle}>
        <div style={valueStyle}>{properties.value}{properties.unit}</div>
        <div style={labelStyle}>{properties.name}</div>
      </div>
    </div>
  );
};

export default Card;
