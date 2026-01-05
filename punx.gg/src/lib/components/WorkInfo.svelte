<script lang="ts">
let employer: string = "Varonis Systems";
let title: string = "Escalation Engineer";
let current: boolean = true;
let startDate: Date = new Date(2024, 10);
let endDate: Date = startDate;
let shortDesc: string = "short description of work";
let longDesc: string = "long description of work";

let startDateMonth: string = startDate.toLocaleDateString('default', { month: 'long'}).toLowerCase().slice(0,3);
let startDateYear: string = `\'${startDate.getFullYear().toString().slice(-2)}`;

let endDateMonth: string = startDate.toLocaleDateString('default', { month: 'long'}).toLowerCase().slice(0,3);
let endDateYear: string = `\'${startDate.getFullYear().toString().slice(-2)}`;

let startDateString: string = `${startDateMonth} ${startDateYear}`;
let endDateString: string = `${endDateMonth} ${endDateYear}`;

// let startDateString: string = `${startDate.toLocaleDateString('default', { month: 'long'})} ${startDate.getFullYear()}`;
// let endDateString: string = `${endDate.getMonth()}/${startDate.getFullYear()}`;
</script>

<div>
    <h1>{employer}</h1>
    <h2>{title}</h2>
    <h3>{startDateString} - {current ? "current" : endDateString}</h3>
    <p>{shortDesc}</p>
    <p>{longDesc}</p>
</div>

<style>
</style>