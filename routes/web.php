<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CityController;
use App\Http\Controllers\Admin\ClassifiedAdController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\SponsorController;
use App\Http\Controllers\Admin\StateController;
use App\Http\Controllers\Admin\SubCategoryController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\UserProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/index', function () {
    return Inertia::render('Frontend/Index');
})->name('index');




Route::middleware(['auth', 'verified', 'role:Admin'])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('users/roles/{id}', [UserController::class, 'userRoles'])->name('users.roles');
    Route::post('users/save-roles', [UserController::class, 'saveRole'])->name('userRoles.save');
    Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
    Route::post('/users', [UserController::class, 'store'])->name('users.store');
    Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');
    Route::get('/users/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
    Route::get('/settings', [SettingController::class, 'index'])->name('settings.index');
    Route::put('/settings/update', [SettingController::class, 'update'])->name('settings.update');
    Route::get('/slides/sort', [SliderController::class, 'sort'])->name('slides.sort');
    Route::post('/slides/updateOrder', [SliderController::class, 'updateOrder'])->name('slides.updateOrder');
    Route::resource('slides', SliderController::class);
    Route::get('/testimonials/sort', [TestimonialController::class, 'sort'])->name('testimonials.sort');
    Route::post('/testimonials/updateOrder', [TestimonialController::class, 'updateOrder'])->name('testimonials.updateOrder');
    Route::resource('/testimonials', TestimonialController::class);
    Route::get('/sponsors/sort', [SponsorController::class, 'sort'])->name('sponsors.sort');
    Route::post('/sponsors/updateOrder', [SponsorController::class, 'updateOrder'])->name('sponsors.updateOrder');
    Route::resource('/sponsors', SponsorController::class);

    Route::post('/roles/{role}/assign', [RoleController::class, 'assignRole'])->name('roles.assign');
    Route::post('/roles/{role}/remove', [RoleController::class, 'removeRole'])->name('roles.remove');
    Route::resource('roles', RoleController::class);


    Route::post('/permissions', [PermissionController::class, 'store'])->name('permissions.store');
    Route::resource('permissions', PermissionController::class);
    Route::resource('cities', CityController::class);
    Route::get('/states/{state}/cities', [StateController::class, 'show'])->name('state.cities');

    Route::resource('states', StateController::class);



    Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
    Route::get('/categories/create', [CategoryController::class, 'create'])->name('categories.create');
    Route::post('/categories', [CategoryController::class, 'store'])->name('categories.store');
    Route::get('/categories/{category}/edit', [CategoryController::class, 'edit'])->name('categories.edit');
    Route::put('/categories/{category}', [CategoryController::class, 'update'])->name('categories.update');
    Route::delete('/categories/{category}', [CategoryController::class, 'destroy'])->name('categories.destroy');

    Route::resource('classifiedAds', ClassifiedAdController::class);
    Route::get('/sub_categories/category/{id}', [SubCategoryController::class, 'index'])->name('sub_categories.index');
    Route::get('/sub_categories/category/{id}/create', [SubCategoryController::class, 'create'])->name('sub_categories.create');
    Route::post('/sub_categories', [SubCategoryController::class, 'store'])->name('sub_categories.store');
    Route::get('/sub_categories/category/{id}/edit', [SubCategoryController::class, 'edit'])->name('sub_categories.edit');
    Route::put('/sub_categories/category/{id}', [SubCategoryController::class, 'update'])->name('sub_categories.update');
    Route::delete('/sub_categories/{sub_category}', [SubCategoryController::class, 'destroy'])->name('sub_categories.destroy');




    Route::get('/user/profile/show', [UserProfileController::class, 'show'])->name('user_profile.show');
    Route::patch('/user/profile/update', [UserProfileController::class, 'update'])->name('user_profile.update');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
