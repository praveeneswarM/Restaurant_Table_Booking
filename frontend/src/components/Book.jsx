import { useState } from "react";

function Book() {
  const [close,setClose] = useState(true);
  const [res,setRes]=useState(null);
  const [cnfm,setCnfm]=useState(null);
  const [formval,setFormval]=useState(null);



  function handleConfirm(e)
  {
    e.preventDefault();
     const formdata = formval;
    
    // console.log(data);

    fetch('http://localhost:8080/booktable-confirm',{method:"POST",body:formdata})
    .then(responce=>{
      return responce.json();
    }).then((data)=>{
      if(data)
        console.log(data);
        if(data==="OK")
        {
          setCnfm(true);
        }
        else if(data==="NOT_ACCEPTABLE")
        {
          setCnfm(false);
        }
    }).catch(error=>{
      console.error(error);
    })
    console.log("Booking Confirmed");
  }
  function handleCancel(e)
  {
    e.preventDefault();
    setClose(!close);
    console.log("Booking Canceled");
  }



  function handleSubmit(e){
    e.preventDefault();
    const formdata = new FormData(e.target);
    setFormval(formdata);
    // console.log(data);

    fetch('http://localhost:8080/booktable',{method:"POST",body:formdata})
    .then(responce=>{
      return responce.json();
    }).then((data)=>{
      if(data)
        console.log(data);
        if(data==="OK")
        {
          setRes(true);
        }
        else if(data==="NOT_ACCEPTABLE")
        {
          setRes(false)
        }
    }).catch(error=>{
      console.error(error);
    })

    
    
  }
  const today = new Date().toISOString().split("T")[0];

  return (
    close && <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md relative font-[Maharlika]">
        {/* Close button */}
       <button
          onClick={()=> setClose(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 text-center">Booking Form</h2>

        <form className="space-y-4 mt-4" method="post"  onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
            required
              name="name"
              type="text"
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:text-[#bb7d3c]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
            required
            name="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:text-[#bb7d3c]"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
            required
            name="date"
            min={today}
            type="date"
            placeholder="Date"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:text-[#bb7d3c]"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Time</label>
<select
  required
  name="time"
  className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:text-[#bb7d3c]"
>
  {Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, "0");
    return (
      <option key={hour} value={`${hour}:00`}>
        {hour}:00
      </option>
    );
  })}
</select>
          </div>

          {/* Submit */}
          {
            !res && res!=null && <div className="flex justify-center flex-col items-center">
              <p className="text-lg font-[Maharlika] text-red-700">Slot Already Booked!</p> 
             <button
            type="submit"
            className="w-full bg-[#bb7d3c] text-[#fff7f7] py-2 rounded-lg hover:bg-[#fff7f7] hover:ring-2 hover:text-[#bb7d3c]  transition"
          >
            Submit
          </button>
            </div>  
          }
          {res==null   && <button
            type="submit"
            className="w-full bg-[#bb7d3c] text-[#fff7f7] py-2 rounded-lg hover:bg-[#fff7f7] hover:ring-2 hover:text-[#bb7d3c]  transition"
          >
            Submit
          </button>}
          {
            res && cnfm==null && <div className="flex justify-center flex-col items-center">
              <p className="text-lg font-[Maharlika] text-green-700">Slot Available</p>
              <span className="flex flex-row gap-3">
              <button className="px-6 bg-[#fff7f7] text-[#bb7d3c] py-2 rounded-lg hover:bg-[#bb7d3c] ring-2 hover:text-[#fff7f7]  transition" onClick={handleCancel} >
                Cancel
              </button>
                <button className="px-6 bg-green-700 text-[#fff7f7] py-2 rounded-lg hover:bg-[#fff7f7] hover:ring-2 hover:text-green-700  transition" onClick={handleConfirm} >
                Confirm
              </button>
              </span>
              
            </div>  
          }
          
          { cnfm && <div className="flex items-center text-center flex-col">
                  <p className="text-sm text-green-700">visit restaurant on time!</p>
                  <p onClick={handleCancel}  className="cursor-pointer w-full bg-green-700 text-[#fff7f7] py-2 rounded-lg ring-2">Booking Confirmed!</p>
          </div>

          }

        </form>
      </div>
    </div>
  );
}
export default Book;