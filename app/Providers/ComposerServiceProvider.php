<?php


namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer(['layouts.app'], function ($view) {
            $this->assignCommonVars($view);
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    private function assignCommonVars(\Illuminate\View\View $view)
    {
        $view->offsetSet('jsApp', ($view->offsetExists('jsApp') ? $view->offsetGet('jsApp') : []) + [
            'user' => Auth::user(),
            'userRoles' => Auth::user()->getRoleNames(),
            'isDoctor' => Auth::user()->hasRole('doctor'),
            'isPatient' => Auth::user()->hasRole('patient'),
        ]);
    }

}
