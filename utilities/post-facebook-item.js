const postFacebookItem = ({ id, title, price, description }) => {
    const [ titleInput, quantityInput, priceInput ] = document.querySelectorAll('input[type=text]'),
        descriptionInput = document.querySelector('textarea');
    return new Promise(() => {
        titleInput.value = title;
        quantityInput.value = 1;
        priceInput.value = price;
        descriptionInput.value = description;
    })
};
  
export default postFacebookItem;