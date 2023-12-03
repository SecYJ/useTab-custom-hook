import { useState } from "react";

const useTab = <T>(data: T[]): [T, (index: number) => void] => {
	const [tabIndex, setTabIndex] = useState(0);

	const onTabChange = (index: number) => {
		setTabIndex(index);
	};

	const selectedTabData = data[tabIndex];

	return [selectedTabData, onTabChange];
};

export default useTab;
