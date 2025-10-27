import React, { useState } from 'react';

function App() {
  const [n1, setN1] = useState(1);
  const [d1, setD1] = useState(2);
  const [n2, setN2] = useState(3);
  const [d2, setD2] = useState(4);

  const f1 = d1 !== 0 ? n1 / d1 : 0;
  const f2 = d2 !== 0 ? n2 / d2 : 0;

  let resultado = '';
  if (d1 === 0 || d2 === 0) {
    resultado = 'No se puede dividir para 0.';
  } else if (f1 === f2) {
    resultado = 'Las fracciones son iguales.';
  } else if (f1 > f2) {
    resultado = 'La primera fracción es mayor.';
  } else {
    resultado = 'La segunda fracción es mayor.';
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Comparador de Fracciones</h2>

      <div>
        <label>Fracción 1: </label>
        <input type="number" value={n1} onChange={e => setN1(+e.target.value)} /> /
        <input type="number" value={d1} onChange={e => setD1(+e.target.value)} />
      </div>

      <div>
        <label>Fracción 2: </label>
        <input type="number" value={n2} onChange={e => setN2(+e.target.value)} /> /
        <input type="number" value={d2} onChange={e => setD2(+e.target.value)} />
      </div>

      <p><strong>Resultado:</strong> {resultado}</p>

      <h3>Gráfico</h3>
      <div style={{ background: '#ddd', height: 20, width: '100%', marginBottom: 10 }}>
        <div style={{ background: 'blue', height: '100%', width: `${Math.min(f1 * 100, 100)}%` }}></div>
      </div>
      <div style={{ background: '#ddd', height: 20, width: '100%' }}>
        <div style={{ background: 'green', height: '100%', width: `${Math.min(f2 * 100, 100)}%` }}></div>
      </div>
    </div>
  );
}

export default App;
