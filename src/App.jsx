import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState('');

  useEffect(() => {
    fetchWorkouts();
  }, []);

  async function fetchWorkouts() {
    const { data, error } = await supabase
      .from('workouts')
      .select('*')
      .order('id', { ascending: false });
    if (error) {
      console.error(error);
    } else {
      setWorkouts(data);
    }
  }

  async function addWorkout(e) {
    e.preventDefault();
    if (!newWorkout.trim()) return;
    const { error } = await supabase.from('workouts').insert({ name: newWorkout.trim() });
    if (error) {
      console.error(error);
    } else {
      setNewWorkout('');
      fetchWorkouts();
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-white">Workout Tracker</h1>
      <form onSubmit={addWorkout} className="flex mb-4">
        <input
          type="text"
          placeholder="New workout"
          value={newWorkout}
          onChange={(e) => setNewWorkout(e.target.value)}
          className="flex-grow p-2 border rounded mr-2 text-black"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id} className="bg-gray-800 p-2 mb-2 rounded text-white">
            {workout.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
