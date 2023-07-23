import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/adminLayout';


const EditCities = ({ state }) => {
    const { data, setData, put } = useForm({
      name: state.name,
      status: state.status,
      cities: state.cities,
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      put(route('states.updateCities', state.id), {
        cities: data.cities,
      });
    };
  
    const handleCityChange = (index, value) => {
      setData((prevData) => {
        const newCities = [...prevData.cities];
        newCities[index] = value;
        return {
          ...prevData,
          cities: newCities,
        };
      });
    };
  
    return (
      <div>
        <h1>Edit State Cities</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">State Name:</label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
          />
  
          <label htmlFor="status">State Status:</label>
          <select
            id="status"
            value={data.status}
            onChange={(e) => setData('status', e.target.value)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
  
          <h2>Cities:</h2>
          {data.cities.map((city, index) => (
            <div key={index}>
              <input
                type="text"
                value={city.name}
                onChange={(e) => handleCityChange(index, e.target.value)}
              />
            </div>
          ))}
  
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  };
  

  EditCities.layout = (page)=><AdminLayout>{page}</AdminLayout>
  export default EditCities;
  