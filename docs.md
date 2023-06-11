


//TODO: 1. All services that have the start date passed will be rejected when creating qrcodes
//TODO: 2. Check if time has elapsed for a for non-expirable services
//TODO: throw proper exception to handle expired qrcode 


NextSteps
//TODO: build helper function to detect if a service is 
    - active 
    - not active
    - expired

// creating automated qrcodes for services

1. 

// when creating a service or qrcode the start date of the service or qcode]
// should not be in the past. only future is considered.


<!-- // private function getExpiryDateForRecurringService(string $startDate, string $endDate, string $endTime): string
    // {
    //     $today = Carbon::now()->startOfDay();
    //     $startDate = Carbon::parse($startDate)->startOfDay();
    //     $endDate = Carbon::parse($endDate)->startOfDay();

    //     return match (true) {
    //         // checks if today is before the start date
    //         $today->lte($startDate) => $startDate->format('Y-m-d'),
    //         //checks if the event end date has passed
    //         $today->gt($endDate) => throw new Exception('Service has expired'),
    //         // returns today or the next day if falls between the start and end date
    //         $today->gte($startDate) && $today->lte($endDate) && $this->hasEventTimePassed($endTime) => $today->addDay(1)->format('Y-m-d'),
    //             // returns the start date bt defualt
    //         default => $today->format('Y-m-d')
    //     };
    // } -->

    <!-- // public function isHappeningToday(): bool
    // {
    //     return match ($this->type) {
    //         'non-expirable-service' => now()->is($this->recurring_day),
    //         'one-time-service' => Carbon::parse($this->commence_date)->isToday(),
    //         'recurring-service' => now()->isBetween(Carbon::parse($this->commence_date), Carbon::parse($this->end_date)),
    //         default => throw new \InvalidArgumentException('Type is not supported')
    //     };
    // } -->


// create service --> create qrcode --> store media

// inBackground: check if service has ended and check if qrcode has expiress
