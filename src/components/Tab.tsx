import { useState } from "react";
import { tabs } from "../data";

type TabType = (typeof tabs)[number]["title"];

const Tab = () => {
	const [activeTab, setActiveTab] = useState<TabType>("all");

	return (
		<>
			<ul>
				{tabs.map((tab) => (
					<li key={tab.id} onClick={() => setActiveTab(tab.title)}>
						<button type="button">{tab.title}</button>
					</li>
				))}
			</ul>
			{activeTab === "all" && <p>all</p>}
			{activeTab === "active" && <p>active</p>}
			{activeTab === "inactive" && <p>inactive</p>}
		</>
	);
};

export default Tab;
