import React, { useState, useContext, useEffect } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, setState] = useState("");
	return (
		<AppContext.Provider value={{ state, setState }}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
