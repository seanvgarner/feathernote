# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
  attr_reader :password

  has_attached_file :avatar, default_url: "default_user.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  validates :email, :session_token, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  after_create :ensure_default_starting_notebook

  has_many :notes,
    primary_key: :id,
    class_name: 'Note',
    foreign_key: :author_id

  has_many :notebooks,
    primary_key: :id,
    class_name: 'Notebook',
    foreign_key: :author_id

  has_many :tags,
    primary_key: :id,
    class_name: 'Tag',
    foreign_key: :author_id

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.valid_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_default_starting_notebook
    Notebook.create!( title: "Welcome to Feathernote!", author_id: self.id)
  end

end
