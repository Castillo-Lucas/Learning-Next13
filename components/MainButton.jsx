/*La mayoria de los componenetes se renderizan en el servidor, 
pero al colocar 'use client' este componente se va a renderizar del lado del cliente*/
"use client";

import React, { useState } from "react";

const MainButton = () => {
  const [button, setButton] = useState(false);

  return (
    <div>
      <div className="flex justify-center">
        {" "}
        <button
          onClick={() => {
            setButton(!button);
          }}
          className="border border-stone-500 rounded-lg p-1.5 mt-2"
        >
          {button ? "Borrar Texto" : "Probar Botón"}
        </button>
      </div>

      {button && (
        <p className="text-center text-green-800">
          Este boton funciona correctamente!
        </p>
      )}
    </div>
  );
};

export default MainButton;
