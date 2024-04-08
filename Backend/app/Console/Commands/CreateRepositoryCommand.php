<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CreateRepositoryCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:repository';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'this command create a repository interface with it is implementation concrete class';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //
    }
}
