export enum statusDockingType{
  Complete,
  Incomplete,
}

export enum jobCategoryType{
  maintenance,
  fullservice,
}

export enum finishStatusType{
  true,
  false,
}

export interface ShipSpec{
    id: number
    ship_name: string
    regist_number: string
    account_code: string
    company: string
    description: string
    responsible_rank: string
}

export interface docking{
    id_docking: number 
    ship_id: number
    description:string
    planned_start_date:Date
    planned_end_date:Date
    actual_start_date:Date
    actual_end_date:Date
    budget:number
    currency:string
    total_cost_estimated:number
    status: statusDockingType
}


export interface jobDocking{
    id_job_dock: number
    docking_id: number
    ship_id: number
    job_name: string
    job_code: string
    estimated_hour: number
    job_category: jobCategoryType
    work_description: string
}

export interface checkJobList{
    id_audit: number 
    job_dock_id: number
    title: string
    list_created_at: Date
    isFinished: finishStatusType
} 

export interface questionCheck{
   id_checklist: number
   audit_id: number
   question:string
   isDone: finishStatusType
}

export interface APIresponse<T>{
  status:number
  message:string
  data:T[]
}