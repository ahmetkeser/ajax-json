document.getElementById("ajax").addEventListener("click",getAllEmployees) // ajax butonuna click eventi ekliyoruz bu bizim fonksiyonumuzu tetikleyecek
function getAllEmployees(){
    const xhr = new XMLHttpRequest()
    xhr.open("GET","employees.json",true) // getirme işlemi nereden employees , true burda asengron olmasını istediğimizi belirtir
    xhr.onload = function(){
        let list = document.getElementById("employees")// html de yazılacak alanı çağırıyoruz

        if(this.status == 200){//işlemde herhangibir sıkıntı olmadığında status değeri 200 olur bunu kontrol ediyoruz.
            const employess = JSON.parse(this.responseText) // gelen dosyayı json şeklinde pars ettik
            employess.forEach(element => { // dizi şeklinde geldiği için bilgileri foreach ile döndük
                list.innerHTML +=`
                <tr>
                    <td>${element.name}</td>
                    <td>${element.department}</td>
                    <td>${element.salary}</td>
                </tr>`
            });
            
        }
    } // respons geldiğinde çalışacak
    
    xhr.send() // isteğimizi gönderir



}