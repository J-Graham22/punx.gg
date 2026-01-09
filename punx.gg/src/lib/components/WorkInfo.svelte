<script lang="ts">
	export let employer: string = 'Varonis Systems';
	export let title: string = 'Escalation Engineer';
	export let current: boolean = true;
	export let startDate: Date = new Date(2024, 10);
	export let endDate: Date = startDate;
	export let shortDesc: string = 'short description of work';
	export let longDesc: string = 'long description of work';

	let startDateMonth: string = startDate
		.toLocaleDateString('default', { month: 'long' })
		.toLowerCase()
		.slice(0, 3);
	let startDateYear: string = `\'${startDate.getFullYear().toString().slice(-2)}`;

	let endDateMonth: string = endDate
		.toLocaleDateString('default', { month: 'long' })
		.toLowerCase()
		.slice(0, 3);
	let endDateYear: string = `\'${endDate.getFullYear().toString().slice(-2)}`;

	let startDateString: string = `${startDateMonth} ${startDateYear}`;
	let endDateString: string = `${endDateMonth} ${endDateYear}`;

	// let startDateString: string = `${startDate.toLocaleDateString('default', { month: 'long'})} ${startDate.getFullYear()}`;
	// let endDateString: string = `${endDate.getMonth()}/${startDate.getFullYear()}`;
</script>

<div>
	<h1>{employer}</h1>
	<h2>{title}</h2>
	<h3>({startDateString} - {current ? 'current' : endDateString})</h3>
	<p>{shortDesc}</p>
	<p>{longDesc}</p>
</div>

<style>
</style>
