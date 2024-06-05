// In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

// Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

// A gift can be made if we have all the necessary materials to make it.

function manufacture(gifts, materials) {
  const materialss = materials.split("");
  const giftList = [];

  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i].split("");
    const isAvailable = gift.every((currentValue) =>
      materialss.includes(currentValue)
    );
    if (isAvailable) {
      giftList.push(gift.join(""));
    }
  }
  return giftList;
}