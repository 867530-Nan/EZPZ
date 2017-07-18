Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :user
    post '/user/:user_id/children', to: 'children#create'
    post '/user/photos', to: 'photos#create'
    resources :children
    get 'location', to: 'location#show'
    resources :activities do
      resources :user_activities, except: [:index]
    end
    get 'activity_user_activities', to: 'user_activities#index'
    resources :log
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
