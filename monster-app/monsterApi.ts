const API_URL = 'http://10.0.2.2:5000/monsters';

export const getMonsters = async () => {
  try {
    const response = await fetch(API_URL); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); 
    return data;
  } catch (error) {
    throw error;
  }
};

export const addMonster = async (monster: { name: string; color: string; eyes: number; image: string; }) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(monster),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
