// const itemList = []
// $.getJSON('data.json', function(data){
//     let kbbp = data.kamusBesarBahasaPerempuan;

//         $.each(kbbp, function(i, data){
//             itemList.push(data.item)


//             // itemList.forEach((item) =>{
//             //     const isiItem = item.textContent.toLowerCase();
//             //     if (isiItem.indexOf(dataSearch) != -1) {
//             //         $('#result').append('<dt>' + data.item[i] + '</dt><dd>- '+ data.index +'</dd>');
//             //     }else {
//             //         $('#result').append('Data tidak di temukan');
//             //     }
//             // });
            

//         })

// });


    $.getJSON('data.json', function(data){
        let kbbp = data.kamusBesarBahasaPerempuan;
       
    
            $.each(kbbp, function(i, data){
                
                    $('#result').append('<li id="resultList" class = "mb-2"><strong>' + data.item + ' </strong> artinya: '+ data.index +'</li>');
                
                

                const search = document.querySelector("#search");
                search.addEventListener("keyup", searchData);
                function searchData(e){
                    const cariData = e.target.value.toLowerCase();
                
            

                let itemList = document.querySelectorAll("#resultList");
                itemList.forEach((item) =>{
                    const isiItem = item.firstChild.textContent.toLowerCase();
                    
                    if (isiItem.indexOf(cariData) != -1) {
                        item.setAttribute("style", "display: block;");
                    }else {
                        item.setAttribute("style", "display: none !important;");
                    }
                });
                }
                // if(cariData == data.item){
                //     $('#result').append('<dt style="display: block;">' + data.item + '</dt><dd style="display: block">- '+ data.index +'</dd>');
                // }
                // else{
                //     $('#result').append('');
                    
                // }
    
    
            
                
    
            })
    
    });


