        function freshlorem(){
            var lorem = document.createElement('p')
            lorem.className = 'text'
            lorem.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam architecto illo alias ut quam consectetur necessitatibus eaque ex, officia deserunt natus doloremque nulla officiis expedita amet, impedit, magnam laborum dolor!'
            quote.append(lorem)
        }
        var quote = document.getElementById('back');
        let btn = document.getElementById('change');
        btn.addEventListener("click",freshlorem)