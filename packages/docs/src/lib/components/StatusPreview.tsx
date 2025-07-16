import { Status, type VariantStatusType } from "@dxdns/feflow-react"

export default function () {
	const variants = ["pulse", "ping", "bounce"]

	return (
		<div
			style={{
				maxWidth: "300px",
				margin: "0 auto",
				lineHeight: 3
			}}
		>
			{variants.map((variant, i) => (
				<div key={variant}>
					<Status
						variant={variant as VariantStatusType}
						color={i % 2 ? "var(--ff-success)" : "var(--ff-error)"}
					/>
					<br />
				</div>
			))}

			{["5rem", 100, "150px", 200].map((size, i) => (
				<div key={size}>
					<Status
						color={i % 2 ? "var(--ff-info)" : "var(--ff-warning)"}
						variant={i % 2 ? "bounce" : "none"}
						size={size}
					/>
					<br />
				</div>
			))}
		</div>
	)
}
