import React from 'react'

export default function ExpandedComponent({ data, Language, config }) {
	return (
		<div>
			<pre></pre>
			{Language === "en" ? (
				<>
					Example:<pre
						className="mx-0 mx-lg-5"
						style={{ whiteSpace: "break-spaces", padding: "0 10px", color: `${config.darkMode ? "#FFEB3B" : "#6f42c1"}` }}>
						{JSON.stringify(data?.en?.Ex)}
					</pre>
				</>
			) : (
				<>
					مثال:<pre
						className="mx-0 mx-lg-5"
						style={{ direction: "rtl", whiteSpace: "break-spaces", padding: "0 10px", color: `${config.darkMode ? "#FFEB3B" : "#198754"}` }}>
						{JSON.stringify(data?.ar?.Ex)}
					</pre>
				</>
			)}
			{Language === "en" ? (
				<>
					Description:<pre
						className="mx-0 mx-lg-5"
						style={{ whiteSpace: "break-spaces", padding: "0 10px", color: `${config.darkMode ? "#FFEB3B" : "#dc3545d6"}` }}>
						{JSON.stringify(data?.en?.Desc)}
					</pre>
				</>
			) : (
				<>
					الوصف:<pre
						className="mx-0 mx-lg-5"
						style={{ direction: "rtl", whiteSpace: "break-spaces", padding: "0 10px", color: `${config.darkMode ? "#FFEB3B" : "#dc3545d6"}` }}>
						{JSON.stringify(data?.ar?.Desc)}
					</pre>
				</>
			)}
		</div>
	)
}
