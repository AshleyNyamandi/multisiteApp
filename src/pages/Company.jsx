import { useState } from "react";


const Company = () => {
 const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mt-10">
         <div className="mb-5">
            {
              tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`
                    text-sm mr-3 ${activeTab === index ? "border-b-2 border-b-green-500 font-bold" : ""}`
                  }
                >
                  {tab.label}
                </button>
              ))
            }
        </div>     
        <div className="bg-stone-50 min-h-20 rounded-bl-xl p-3 text-black rounded-br-xl">
          <p>{tabs[activeTab].content}</p>
        </div>
      </div>

    </div>
  );
};

export default Company