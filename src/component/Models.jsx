import {use} from 'react'

import ModelCard from './ModelCard';

 const Models = ({modelPromise}) => {
  const models = use(modelPromise)


  return (
     <div className="py-20 max-w-7xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className='text-gray-500'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {models.map(model =>(
          <ModelCard key={model.id} model={model}/>
        ))}
      </div>
    </div>
  );
};

export default Models;