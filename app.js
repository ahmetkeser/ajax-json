//xmlhttprequest status codları
// 200 Başarılı bağlantı
// 403 : forbitten
// 404 : Not Fount
// 505 :Internal server Error

//--------------------------
//Holds the status of the XMLHttpRequest.
// redisdate codları
//0: request not initialized
//1: server connection established
//2: request received
//3: processing request
//4: request finished and response is ready
document.getElementById("ajax").addEventListener("click",getAllEmployees) // ajax butonuna click eventi ekliyoruz bu bizim fonksiyonumuzu tetikleyecek
function getAllEmployees(){
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){ // redisdate durumunda yaptığı kodları getirir sayfanın en başında redisdate kodlarına bak   BU ESKİ BİR YÖNTEM  aşşağıda onload yöntemi var.
        console.log(this.readyState) // olumlu bir bağlantı ve alışverişte ekrana sıralı 1 2 3 4 kodlarını getirir
        console.log(this.status) // buda status kodlarını bize döner
    }
    xhr.open("GET","employees.json",true) // getirme işlemi nereden employees , true burda asengron olmasını istediğimizi belirtir
    xhr.onload = function(){ // response hazır olduğunda çalışacak
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
