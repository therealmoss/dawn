    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("contact[Date required by]")[0].setAttribute('min', today);