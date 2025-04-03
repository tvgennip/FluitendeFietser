expand = id => {
    let pTags = document.querySelectorAll('p');
    pTags.forEach(ptag => {
        ptag.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
};