function colorDigit (num) {
    const splitted = document.getElementById("piValue").innerHTML.split('');
  
    const newContent = splitted.map((letter, i) => {
      const className = i >= splitted.length - num ? 'blue blast' : 'blast';
  
      return '<span class="'+className+'">' + letter + '</span>';
    }).join('');
    
  
    document.getElementById("piValue").innerHTML = newContent;
  }
  
  myFunction(3);

  const className = 