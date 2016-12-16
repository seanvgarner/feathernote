Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :notes, only: [:index, :show, :create, :update, :destroy]
    resources :notebooks, only: [:index, :show, :create, :destroy]
    resources :tags, only: [:index, :create, :destroy]
  end

  delete 'api/taggings/:id', to: 'api/tags#destroy_tagging'
end
