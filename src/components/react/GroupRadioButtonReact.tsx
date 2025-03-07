import React, { useState } from 'react';

export const GroupRadioButtonReact = ({enviroments,initialOption}) => {

    const [enviroment, setEnviroment] = useState(initialOption);   

    function handleChange(event) {     
        setEnviroment(event.target.value);       
    }

    return (
        <div className="relative max-w-auto pb-10"> 
            <nav className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-1 justify-items-start grow">
                {enviroments?.map((env) => (           
                     <div role="button" className="flex w-full items-center rounded-lg p-0 transition-all" key={env.enviroment}>
                     <label  className="flex w-full cursor-pointer items-center px-3 py-2">
                         <div className="inline-flex items-center">
                             <label className="relative flex items-center cursor-pointer">
                                 <input
                                     value={env.enviroment}
                                     checked={enviroment === env.enviroment}
                                     name="enviroment"
                                     type="radio"
                                     role="radio"
                                     className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-purple-500 transition-all"
                                     id={env.enviroment} onChange={handleChange}
                                 />
                                 <span className="absolute bg-white w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                             </label>
                             <label className="ml-2 text-white cursor-pointer text-sm">
                             {env.label}
                             </label>
                         </div>
                     </label>
                     </div> 
                ))}
            </nav>
        </div>       
    )
};

export default GroupRadioButtonReact;
