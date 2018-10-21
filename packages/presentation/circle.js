import React from 'react'

const Circle = () => (
  <ul
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      listStyle: 'none',
    }}
  >
    <li>
      <div
        name="circle"
        style={{
          width: 100,
          height: 100,
          border: '2px solid blue',
          borderRadius: 50,
        }}
      />
    </li>

    <li>
      <div
        name="small-circle"
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          border: '2px solid yellow',
        }}
      />
    </li>

    <li>
      <div
        name="circle"
        style={{
          width: 100,
          height: 100,
          border: '2px solid blue',
          borderRadius: 50,
          position: 'relative',
        }}
      >
        <div
          name="small-circle"
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            border: '2px solid yellow',
            position: 'absolute',
            top: 22.5,
            left: 22.5,
          }}
        />
      </div>
    </li>

    <li>
      <div
        style={{
          width: 200,
          height: 200,
          backgroundImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 120 120' version='1.1' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='60' r='50' stroke='#000' stroke-width='10' stroke-dasharray='0 20' stroke-linecap='round' fill='transparent' /></svg>")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          name="circle"
          style={{
            width: 100,
            height: 100,
            border: '2px solid blue',
            borderRadius: 50,
            position: 'relative',
            alignSelf: 'center',
          }}
        >
          <div
            name="small-circle"
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              border: '2px solid yellow',
              position: 'absolute',
              top: 22.5,
              left: 22.5,
            }}
          />
        </div>
      </div>
    </li>
  </ul>
)

export default Circle
