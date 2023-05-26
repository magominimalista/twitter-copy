import React from "react";

type TabButtonProps = {
  tab: string;
  selectedTab: string;
  onClick: (tab: string) => void;
};

const TabButton: React.FC<TabButtonProps> = ({ tab, selectedTab, onClick }) => {
  const handleClick = () => {
    onClick(tab);
  };

  return (
    <button
      className={`flex-grow p-2 hover:bg-gray-800 focus-visible:bg-gray-800 ${
        tab === selectedTab ? "border-b-4 border-b-blue-500 font-bold" : ""
      }`}
      onClick={handleClick}
    >
      {tab}
    </button>
  );
};

export default TabButton;
