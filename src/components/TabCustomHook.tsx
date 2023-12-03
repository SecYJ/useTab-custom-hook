import { tabs } from "../data";
import useTab from "./useTab";

const TabCustomHook = () => {
	const [selectedData, updateTab] = useTab(tabs);

	return (
		<>
			<ul>
				{tabs.map((tab, index) => (
					<li key={tab.id}>
						<button type="button" onClick={() => updateTab(index)}>
							{tab.title}
						</button>
					</li>
				))}
			</ul>
			{selectedData.title}
		</>
	);
};

export default TabCustomHook;
