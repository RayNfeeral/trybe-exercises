module.exports = {
  dogPictures: async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    return await res.json();
  },
}